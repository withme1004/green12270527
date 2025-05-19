<? 
$G5_PATH="./gnuboard5";
include_once($G5_PATH.'/common.php');
include_once($G5_PATH.'/head.sub.php');
include_once($G5_PATH.'/lib/outlogin.lib.php');
?>

<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="../../css/green.css">
</head>
<body>
 <div id="wrap">
   <header>
   <ul>
		<li><a href="" target="_new">메뉴1</a></li>
		<li><a href="" target="_new">메뉴2</a></li>
		<li><a href="" target="_new">메뉴3</a></li>
		<li><a href="" target="_new">질문과 답</a></li>
		<li><a href="" target="_new">
    <?php
        if ($is_member) {
        echo '<a href="">' . $member['mb_id'] . '</a> 님';
        } else {
            echo "로그인";
        }
    ?>
   </a></li></ul>
   </header>
   <div class="con">
    실제내용들어가는부분
    </div>
   <footer>
    하단내용
   </footer>
 </div>
</body>
</html>