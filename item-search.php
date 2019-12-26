<?php

include 'connect.php';

$item = $_POST['item'];

if($item != ""){
	$item_query = "SELECT * FROM item_menu WHERE item_name LIKE '%$item%'";
	$result = $mysqli->query($item_query);
	if($result){
		if($result->num_rows > 0){

			echo '<table class="table table-striped table-bordered table-hover table-condensed"><thead><tr><th><center>Item Name</center></th><th><center>Price</center></th></tr></thead><tbody>';
			while ($data = $result->fetch_assoc()) {
				echo '<tr><td>'.$data['item_name'].'</td><td>'.$data['price'].'</td>';
			}
			

			echo '</tbody></table>';
		} else {
			echo "This item should include in menu?";
		}
	}
} else {
	echo "Wipe your apetite!";
}
?>