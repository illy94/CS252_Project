<?

$file_name = $_FILES['upload_file']['name'];                // 업로드한 파일명

$file_tmp_name = $_FILES['upload_file']['tmp_name'];   // 임시 디렉토리에 저장된 파일명

$file_size = $_FILES['upload_file']['size'];                 // 업로드한 파일의 크기

$mimeType = $_FILES['upload_file']['type'];                 // 업로드한 파일의 MIME Type



// 첨부 파일이 저장될 서버 디렉토리 지정(원하는 경로에 맞게 수정하세요)

$save_dir = './upload/file/';



// 업로드 파일 확장자 검사 (필요시 확장자 추가)

   if($mimeType=="html" ||

   $mimeType=="htm" ||

   $mimeType=="php" ||

   $mimeType=="php3" ||

   $mimeType=="inc" ||

   $mimeType=="pl" ||

   $mimeType=="cgi" ||

   $mimeType=="txt" ||

   $mimeType=="TXT" ||

   $mimeType=="asp" ||

   $mimeType=="jsp" ||

   $mimeType=="phtml" ||

   $mimeType=="js" ||

   $mimeType=="") {

		echo("<script>

		alert('업로드를 할 수 없는 파일형식입니다.');

		document.location.href = './file_upload.html';

		</script>");

		exit;

   }



   // 파일명 변경 (업로드되는 파일명을 별도로 생성하고 원래 파일명을 별도의 변수에 지정하여 DB에 기록할 수 있습니다.)

	$real_name = $file_name;     // 원래 파일명(업로드 하기 전 실제 파일명)

	$arr = explode(".", $real_name);	 // 원래 파일의 확장자명을 가져와서 그대로 적용 $file_exe

	$arr1 = $arr[0];

	$arr2 = $arr[1];

	$arr3 = $arr[2];

	$arr4 = $arr[3];

	if($arr4) {

		$file_exe = $arr4;

	} else if($arr3 && !$arr4) {

		$file_exe = $arr3;

	} else if($arr2 && !$arr3) {

		$file_exe = $arr2;

	}



	$file_time = time();

	$file_Name = "file_".$file_time.".".$file_exe;	 // 실제 업로드 될 파일명 생성	(본인이 원하는 파일명 지정 가능)

	$change_file_name = $file_Name;			 // 변경된 파일명을 변수에 지정

	$real_name = addslashes($real_name);		// 업로드 되는 원래 파일명(업로드 하기 전 실제 파일명)

	$real_size = $file_size;                         // 업로드 되는 파일 크기 (byte)





//파일을 저장할 디렉토리 및 파일명 전체 경로

   $dest_url = $save_dir . $change_file_name;



//파일을 지정한 디렉토리에 업로드

   if(!move_uploaded_file($file_tmp_name, $dest_url))

   {

      die("파일을 지정한 디렉토리에 업로드하는데 실패했습니다.");

   }


/*

	$change_file_name : 실제 서버에 업로드 된 파일명. 예: file_145736478766.gif

	$real_name : 풍경사진.gif 

	$real_size : 파일 크기(byte)

*/

?>
