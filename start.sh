CUR_PATH=$(cd "$(dirname "$0")"; pwd)
echo "Current path: ${CUR_PATH}"
nohup node service.js >file.out 2>&1 &
echo $! > ${CUR_PATH}/ReadingPlanUI.pid