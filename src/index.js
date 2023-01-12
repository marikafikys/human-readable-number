module.exports = function toReadable (number) {
	const lessThanTwenty = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
	const dozens = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
	if (number == 0) {
		return "zero";
	} else
	if (number < 20) {
		return lessThanTwenty[number].trim();
	} else
	if (number < 100) {
		str = number + "";
		return (dozens[str[0]]+lessThanTwenty[str[1]]).trim();
	} else
	if (number < 1000) {
		str = number + "";
		if (str[1] < 2) {
			return (lessThanTwenty[str[0]] + "hundred " + lessThanTwenty[+(str[1]+str[2])]).trim();
		} else {
			return (lessThanTwenty[str[0]] + "hundred " + dozens[str[1]] + lessThanTwenty[str[2]]).trim();
		}
	}
}