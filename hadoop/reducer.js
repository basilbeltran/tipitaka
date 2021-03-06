/**
* Reducer chunk processing function.
* Reads STDIN
*/
function reduceWords () {
   var chunk = process.stdin.read(); // Read a chunk
   if (chunk !== null) {
       // Split it
       var lines = chunk.trim().split('\n');
       var counts = {};

       // Count words
       lines.forEach(function (line) {
           line = line.trim();

           var atom = line.split('\t');
           var word = atom[0];
           var count = +atom[1];

           if (word !== null && word.length) {
               if (!counts[word]) {
                   counts[word] = 0;
               }

               counts[word] += count;
           }
       });

       // Emit results
       process.stdout.write(`{`);
       Object.keys(counts).forEach(function (word) {
           var count = counts[word];
           //process.stdout.write(word + '\t' + count + '\n');
           process.stdout.write(`"${word}": ${count},`);
       });
      process.stdout.write(`}`);
   }
}

process.stdin.setEncoding('utf8');
process.stdin.on('readable', reduceWords); // Set STDIN processing handler
