<? 
$G5_PATH="./gnuboard5";
include_once($G5_PATH.'/common.php');
include_once($G5_PATH.'/head.sub.php');
include_once($G5_PATH.'/lib/outlogin.lib.php');
?>
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="/gnuboard5/theme/basic/skin/outlogin/basic/style.css">
  <style>
    #mylogin{
      width: 1200px;
      display:flex;
      justify-content: center;
      margin: 200px auto 200px;
    }
    #aside{
      width: 400px;
    }
  </style>
  </head>
  <body>
 
  <div id="mylogin">
    <div id="aside">
          <?php echo outlogin(); ?>
      </div>
  </div>

