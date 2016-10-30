hadoop jar $HADOOP_HOME/libexec/share/hadoop/tools/lib/hadoop-streaming-2.7.2.jar \
   -Dmapreduce.job.maps=1 \
   -Dmapreduce.job.reduces=1 \
   -files ./mapper.js,./reducer.js \
   -mapper "node ./mapper.js" \
   -reducer "node ./reducer.js" \
   -input ./dn1.html \
   -output ./dn1.out
