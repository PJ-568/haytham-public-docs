VisualExtensometerStereoVision 使用手册

<img src="../../../../../../assets/products/video-extensometer/image2.jpeg"
style="width:4.72014in;height:6.89375in"
alt="22e1cac1120ddc9e6bf232bea4f20af5" />

目录

[一、设备架设 [1](#一设备架设)](\l)

[二、软件参数详情 [6](#二软件参数详情)](\l)

[三、实验操作流程 [17](#三实验操作流程)](\l)

[四、安全操作及注意事项 [20](#四软件注意事项)](\l)

# 

# 一、设备架设

1.  组装好三脚架。

    <img src="../../../../../../assets/products/video-extensometer/image3.jpeg"
    style="width:3.46944in;height:6.16875in"
    alt="fc24f13436f5f3a79576712ec7a12dfb" />

2.  将快装板固定在双目横杠底座上。

    <img src="../../../../../../assets/products/video-extensometer/image4.jpeg"
    style="width:3.45347in;height:6.14097in"
    alt="01868b0ef59254b1331ab621898cdc9f" />

3.  将相机、光源安装在双目横杆上，调整好水平及高度。

    <img src="../../../../../../assets/products/video-extensometer/image5.png"
    style="width:3.41389in;height:6.06597in"
    alt="67d6f99269400c54c4f5e5770026c592" />

    3.1）脚架高度调节

    3.2）中轴高度调节

    3.3）云台旋转调节

    3.4）云台俯仰角调节

    3.5）快装板拆卸调节

4.  相机连接：用 USB3.0 数据线将引伸计和电脑主机连接（电脑必须支持 USB3.0 接口）。

    <img src="../../../../../../assets/products/video-extensometer/image6.jpeg"
    style="width:3.33472in;height:4.04444in"
    alt="7d88af02f7b6945df1f94e27c2cbca11" />

5.  光源连接：将电源线连接至光源控制器上，再通过黑色数据线将光源控制器（CH 接口）与光源连接。

    <img src="../../../../../../assets/products/video-extensometer/image7.png"
    style="width:6.36181in;height:3.82986in" /><img src="../../../../../../assets/products/video-extensometer/image8.png"
    style="width:3.19792in;height:3.86458in"
    alt="c73d3cfae5dfcef88de5e84bccc86c85" />

    5.1）通道亮度显示，1.100（0 为关闭 255 为最亮，1 指的是通道 1，100 指的是是亮度值）；

    5.2）控制按钮旋转为调节亮度值，按下为调节通道值；

6.  按照双目引伸计预设的距离参数，调整合适的摆放距离横杆前端距离被测物 1000mm。

    <img src="../../../../../../assets/products/video-extensometer/image9.png"
    style="width:5.45833in;height:3.08819in" alt="图片 1" />

例：预设距离参数 1000mm。

使用卷尺或长度尺等测量“设备前端边缘到试样”的间距，调整到约为 1000mm。完成引伸计和待测试样中心的基本对齐。

7.  取下设备镜头防尘盖，按下光源控制器开关，蓝色光源点亮，调整亮度使视野亮度适中。

8.  打开电脑，进行软件操作，对双目引伸计、灯光等进行微调。

# 二、软件参数详情

设置好左右相机的存图路径，一般保存图像是用于全场分析如果不需要全场分析不需要勾选 Save
Images。

<img src="../../../../../../assets/products/video-extensometer/image10.png"
style="width:2.68681in;height:3.31389in"
alt="820ae710-8884-4928-ae61-60e9a63dbd98" /><img src="../../../../../../assets/products/video-extensometer/image11.png"
style="width:6.86667in;height:3.02847in" />

<img src="../../../../../../assets/products/video-extensometer/image12.png"
style="width:3.29167in;height:3.77083in" />

1)  Save Images 勾选状态下实时计算的图像会保存至设置的图像存储路径下；

2)  Ste Image Save Path 设置图像存储路径，可分别设置左右相机存图路径；

3)  Set date save path
    设置计算结果的存储路径（计算结果生成.csv 格式的表格数据）；

<img src="../../../../../../assets/products/video-extensometer/image13.png"
style="width:9.275in;height:4.88194in" />

4)  Select Camera 选中相机；

5)  Camera position 指定相机为左相机或者右相机；

6)  Camera Image Rotation----Rotate Right 90°两个相机画面向右旋转 90°；

    <img src="../../../../../../assets/products/video-extensometer/image14.png"
    style="width:6.60417in;height:7.88542in" />

7)  Sliding window
    Length 滑窗长度（一张图片一个数据，几个数据做一次滤波）；

8)  Sliding window Count
    滑窗次数（数据做几次滤波，值越大曲线越平滑，但是数据越失真）

9)  Subarea size 搜索子区大小

    <img src="../../../../../../assets/products/video-extensometer/image15.png"
    style="width:6.63542in;height:7.82292in" />

10) Communication Format---UDP_Json(与试验机的通讯方式)

11) UDP Sender---8011(与试验机的通讯方式)

    <img src="../../../../../../assets/products/video-extensometer/image16.png"
    style="width:6.69792in;height:7.83333in" />

12) Stage Adjustment 阶段调整可设置三个阶段不同的采样频率

13) Real-time Adjustment 实时调整为当前每秒的采样频率

14) Interval Adjustment 间隔调整为每隔多久采集一张图像

    <img src="../../../../../../assets/products/video-extensometer/image17.png"
    style="width:6.65625in;height:7.85417in" />

15) Incremental value
    0.95 匹配值小于设定阈值就替换参考图（螺纹钢拉伸过程中表面铁皮脱落防止引伸计跟丢）

16) Zncc Threshold 0.7 软件针对特定场景参数不能改

17) CZncc Threshold 0.5 软件针对特定场景参数不能改

    <img src="../../../../../../assets/products/video-extensometer/image18.png"
    style="width:6.67708in;height:7.84375in" />

18) Enter experiment name 实验前是否需要输入实验名称方便后期追溯数据。

    <img src="../../../../../../assets/products/video-extensometer/image19.png"
    style="width:2.70833in;height:3.05208in" />

19) True Value 软件计算默认取绝对值，勾选真实值后软件会输出真实值

20) Average Value
    勾选平均值后，软件计算会对纵向和横向的虚拟引伸计分别取平均值

    <img src="../../../../../../assets/products/video-extensometer/image20.png"
    style="width:6.01806in;height:4.30972in"
    alt="2adf34a5a8aec1d6fd438514a321ad35" />

21) 可选择虚拟引伸计计算（计算结果为两点间的相对伸长），也可选择单点跟踪（计算单点在空间位置上的变化）

    <img src="../../../../../../assets/products/video-extensometer/image21.png"
    style="width:8.61458in;height:4.54167in"
    alt="83e5cf1d06c6e0dd3e2de777b29afa02" />

<!-- -->

22. 软件计算开始和结束

23. 当前组虚拟引伸计原始标距（mm）

24. 当前组虚拟引伸计延伸值（mm）

25. 当前组虚拟引伸计延伸率（%）

26. 实时计算数据表显示

27. 计算结束后可手动导出计算结果数据

# 三、实验操作流程

把设备架设好，参数调节后

1）使用马克笔或手喷漆给试样制作特征点

<img src="../../../../../../assets/products/video-extensometer/image22.jpeg"
style="width:5.42708in;height:7.64861in"
alt="e90f692fa0de06aa5ab3fb024cece7e3" />

2.  把试样装夹至加载装置上并打开引伸计软件，根据需要配置好相应的参数设置，软件默认会创建一组纵向引伸计，如果需要创建多组，可右击鼠标添加横向引伸计或纵向引伸计。

    虚拟引伸计搜索框大小可通过前面讲述的子区大小进行调整，画面分为左右视图，其虚拟引伸计纵向引伸计左视图与右视图的搜索框要一一对应上下不能调反，横向的引伸计也是一样不能左右调反。搜索框可鼠标左击按下拖拽至目标位置松开。

    <img src="../../../../../../assets/products/video-extensometer/image23.png"
    style="width:10.625in;height:5.61458in"
    alt="f556bf68-6fbd-4e29-be76-4428d41ec901" />

3.  软件点击计算，确认软件正确计算并有数值后，查看试验机是否收到变形数据，如果收到即可在试验机进行实验操作，实验结束后应回到引伸计软件上停止计算即可。

4.  如果需要裁切画幅提高相机帧率需要在驱动软件上对两个相机画幅进行裁剪（3D 的软件两个相机裁剪的画幅必须一致，X、Y 偏移量也要求一致；另外相机的帧率提高还与曝光时间有关系，1000000μs/当前曝光时间=最大帧率。这两者共同决定了相机帧率。

# 四、软件注意事项

1.如果打开软件没有图像，可能是两个相机的画幅不一致（可以在驱动软件上把相机画幅恢复）；也有可能是因为相机被其他软件占用了端口（需要把其他软件关闭再重新打开软件）。

相机画幅恢复流程，打开<img src="../../../../../../assets/products/video-extensometer/image24.png"
style="width:0.42361in;height:0.55972in" />软件，连接相机打开相机画面，再把两个相机画幅恢复。

2.两个相机的采集帧率与曝光时间要一致，不一致会导致软件输出数据存在问题。

3.软件使用需要插上加密狗。

# 五、安全操作及设备养护

1.如果设备精度出现问题，可根据双目引伸计操作说明书详情版出现标定即可

2.未经专业培训，不得单独操作此仪器。

3.使用时尽量不要让光源直射人眼，避免可能造成操作人员眼部伤害。

4.高温环境下，尽量配戴高温手套，防止人员烫伤，制作散斑或者标记点时，注意不要沾到眼睛。

5.仪器不使用时，应将其装入箱内，置于干燥处，注意防震、防尘和防潮。

6.仪器运输应将仪器装于箱内进行，运输时应小心避免挤压、碰撞和剧烈震动，长途运输最好在箱子周围使用软垫。

7.仪器安装至三脚架或者拆卸时，要先托住仪器，以防仪器跌落。

8.不可用化学试剂擦试塑料部件及有机玻璃表面，可用浸水的软布擦试。

9.测量前应仔细全面检查仪器，确认仪器各项指标、功能、电源符合要求时再进行作业。

10.即使发现仪器功能异常，非专业维修人员不可擅自拆开仪器，以免发生不必要的损坏。
