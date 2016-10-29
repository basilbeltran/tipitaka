./clean.sh
./streamer.sh
hdfs dfs -get dn.out
rm dn.out/_*
cat dn.out/* > out
