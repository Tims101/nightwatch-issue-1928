for ((n=0;n<100;n++))
do
    yarn nightwatch

    if [ $? -eq 0 ]; then
        echo OK
    else
        echo FAIL
        break
    fi
done