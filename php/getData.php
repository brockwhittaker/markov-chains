<?php
function getSite ($website) {
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $website);
	curl_setopt($ch, CURLOPT_HTTPGET, TRUE);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
	$output = curl_exec($ch);
	curl_close($ch);
	header("Access-Control-Allow-Origin: *");
	header('Content-Type: application/javascript');
	return $output;
}

echo getSite("http://www.reddit.com/r/circlejerk.json");
?>
