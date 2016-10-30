./clean.sh
./streamer.sh
hdfs dfs -get dn1.out
rm dn1.out/_*
cat dn1.out/* > out
