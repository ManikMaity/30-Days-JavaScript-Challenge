// 01
let sen1 = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let count1 = sen1.match(/love/g);
console.log(count1.length);

//02
let sen2 = "You cannot end a sentence with because because because is a conjunction";
console.log((sen2.match(/because/g)).length);

//03
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let cleanSen = sentence.replace(/%|\$|@|#|&|;|!/g, "");
console.log(cleanSen);

//04
let sen3 = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
let ammounts  = sen3.match(/\d+/g);
console.log(parseInt(ammounts[0]) +parseInt(ammounts[1]) + parseInt(ammounts[2]));