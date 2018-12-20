#!/bin/sh
PID=$(cat ReadingPlanUI.pid)
kill -9 $PID
