# 3D Extensometer Stereo Vision User Manual

# <img src="../../../../../../assets/products/video-extensometer/image1.jpeg"
style="width:4.72014in;height:6.89375in"
alt="22e1cac1120ddc9e6bf232bea4f20af5" />

**Table of Contents**

1.  **Equipment Setup —— 1**

**II. Software Parameter Details —— 5**

**III. Experimental Operation Procedure —— 13**

1\. Specimen Marking (Marker Pen/Spray Paint) —— 13

2\. Specimen Mounting & Software Setup —— 14

3\. Calculation Initiation & Verification —— 14

4\. Frame Cropping (For Increased Frame Rate) —— 14

**IV. Software Notes —— 15**

**V. Safe Operation & Equipment Maintenance —— 15**

**I. Equipment Setup**

1.  Assemble the tripod.
    <img src="../../../../../../assets/products/video-extensometer/image2.jpeg"
    style="width:2.25764in;height:4.01736in"
    alt="fc24f13436f5f3a79576712ec7a12dfb" />
2.  Secure the quick release plate to the base of the stereo bar.
    <img src="../../../../../../assets/products/video-extensometer/image3.jpeg"
    style="width:2.33542in;height:4.15347in"
    alt="01868b0ef59254b1331ab621898cdc9f" />
3.  Mount the cameras and light source onto the stereo bar. Adjust for
    level and height.
    <img src="../../../../../../assets/products/video-extensometer/image4.png"
    style="width:3.41389in;height:6.06597in"
    alt="67d6f99269400c54c4f5e5770026c592" />
    3.1) Adjusting Tripod Leg Height
    3.2) Adjusting Center Column Height
    3.3) Adjusting Pan-Tilt Head Rotation
    3.4) Adjusting Pan-Tilt Head Tilt Angle
    3.5) Detaching and Adjusting the Quick Release Plate
4.  Camera Connection: Connect the extensometer to the computer’s main
    unit using a USB 3.0 data cable (the computer must support USB 3.0
    interfaces).
    <img src="../../../../../../assets/products/video-extensometer/image5.jpeg"
    style="width:3.33472in;height:4.04444in"
    alt="7d88af02f7b6945df1f94e27c2cbca11" />
5.  Light Source Connection: Connect the power cable to the light source
    controller, then connect the light source controller (CH port) to
    the light source using the black data cable.
    <img src="../../../../../../assets/products/video-extensometer/image6.png"
    style="width:5.01667in;height:3.02014in" />
    5.1) Channel Brightness Display, e.g., 1.100 (0 indicates off, 255
    indicates maximum brightness; ‘1’ refers to channel 1, ‘100’ refers
    to the brightness value).
    5.2) Rotate the control knob to adjust brightness; press the knob to
    switch channels.
6.  Based on the preset distance parameters of the stereo extensometer,
    adjust the placement distance so that the front end of the bar is
    approximately 1000mm from the test specimen.
    <img src="../../../../../../assets/products/video-extensometer/image7.png"
    style="width:5.45833in;height:3.08819in" alt="图片 1" />
    Example: Preset distance parameter is 1000mm. Use a tape measure or
    ruler to gauge the distance from the front edge of the equipment to
    the specimen and adjust it to about 1000mm. This achieves basic
    alignment between the extensometer and the center of the specimen to
    be tested.
7.  Remove the lens dust caps from the equipment. Press the power switch
    on the light source controller to illuminate the blue light source.
    Adjust the brightness for optimal viewing clarity.
8.  Turn on the computer and proceed with software operations for
    fine-tuning the stereo extensometer, lighting, etc.

<!-- -->

2.  **  
    Software Parameter Details**

Set the image save paths for the left and right cameras. Saving images
is typically used for full-field analysis; if full-field analysis is not
required, do not check ‘Save Images’.

<img src="../../../../../../assets/products/video-extensometer/image8.png"
style="width:2.17847in;height:2.6875in"
alt="820ae710-8884-4928-ae61-60e9a63dbd98" /><img src="../../../../../../assets/products/video-extensometer/image9.png"
style="width:3.80417in;height:1.67778in" /><img src="../../../../../../assets/products/video-extensometer/image10.png"
style="width:2.60972in;height:2.98958in" />

1)  **Save Images:** When checked, images from real-time calculation
    will be saved to the set image storage path.
2)  **Set Image Save Path:** Configure the image storage path; paths for
    left and right cameras can be set separately.
3)  **Set data save path:** Configure the storage path for calculation
    results (results are saved as .csv format table data).
    <img src="../../../../../../assets/products/video-extensometer/image11.png"
    style="width:6.03819in;height:3.17778in" />
4)  **Select Camera:** Select the camera.
5)  **Camera position:** Designate the camera as left or right.
6)  **Camera Image Rotation—-Rotate Right 90°:** Rotates the image from
    both cameras 90° to the right.
    <img src="../../../../../../assets/products/video-extensometer/image12.png"
    style="width:4.08889in;height:4.88403in" />
7)  **Sliding Window Length:** The length of the sliding window (One
    data point per image; several data points are used for one filtering
    operation).
8)  **Sliding Window Count:** The number of sliding window passes (How
    many times the data is filtered. A higher value results in a
    smoother curve but increases data distortion).
9)  **Subset size:** The size of the search subset.
    <img src="../../../../../../assets/products/video-extensometer/image13.png"
    style="width:6.01736in;height:7.09653in" />
10) **Communication Format—UDP_Json:** (Communication method with the
    testing machine).
11) **UDP Sender—8011:** (Communication method with the testing
    machine).
    <img src="../../../../../../assets/products/video-extensometer/image14.png"
    style="width:6.27292in;height:7.33681in" />
12) **Stage Adjustment:** Phase adjustment allows setting different
    sampling rates for three stages.
13) **Real-time Adjustment:** Real-time adjustment sets the current
    sampling rate per second.
14) **Interval Adjustment:** Interval adjustment sets the time interval
    for capturing an image.
    <img src="../../../../../../assets/products/video-extensometer/image15.png"
    style="width:5.96042in;height:7.00208in" />
15) **Incremental value 0.95:** Replaces the reference image when the
    correlation value falls below the set threshold (Useful to prevent
    the extensometer from losing track during rebar stretching as
    surface scale detaches).
16) **Zncc Threshold 0.7:** Parameter fixed by the software for specific
    scenarios; cannot be modified.
17) **CZncc Threshold 0.5:** Parameter fixed by the software for
    specific scenarios; cannot be modified.
    <img src="../../../../../../assets/products/video-extensometer/image15.png"
    style="width:5.99375in;height:7.04167in" />
18) **Enter experiment name:** Option to enter an experiment name before
    starting for easier data traceability later.
    <img src="../../../../../../assets/products/video-extensometer/image16.png"
    style="width:2.25694in;height:2.54375in" />
19) **True Value:** The software calculates the absolute value by
    default. Check this to output the true value.
20) **Average Value:** When checked, the software will calculate the
    average value for the virtual extensometers in the longitudinal and
    transverse directions separately.
    <img src="../../../../../../assets/products/video-extensometer/image17.png"
    style="width:6.01806in;height:4.30972in"
    alt="2adf34a5a8aec1d6fd438514a321ad35" />
21) Choose between virtual extensometer calculation (result is the
    relative elongation between two points) or single-point tracking
    (calculates the spatial position change of a single point).
    <img src="../../../../../../assets/products/video-extensometer/image18.png"
    style="width:6.57222in;height:3.46528in"
    alt="83e5cf1d06c6e0dd3e2de777b29afa02" />
22) Software calculation start and stop.
23) Original gauge length (mm) for the current set of virtual
    extensometers.
24) Elongation value (mm) for the current set of virtual extensometers.
25) Elongation percentage (%) for the current set of virtual
    extensometers.
26) Real-time calculation data table display.
27) After calculation ends, result data can be manually exported.

<!-- -->

3.  **  
    Experimental Operation Procedure**

After setting up the equipment and adjusting parameters:

1)  Create marker points on the specimen using a marker pen or spray
    paint.

    <img src="../../../../../../assets/products/video-extensometer/image19.jpeg"
    style="width:5.42708in;height:7.64861in"
    alt="e90f692fa0de06aa5ab3fb024cece7e3" />

2)  Mount the specimen onto the loading device. Open the extensometer
    software and configure the necessary parameter settings as required.
    The software will create one set of longitudinal virtual
    extensometers by default. To add more sets, right-click to add
    transverse or longitudinal virtual extensometers. The search ROI
    size for the virtual extensometer can be adjusted using the Subset
    size parameter mentioned earlier. The display is split into left and
    right views. The search ROIs for longitudinal virtual extensometers
    must correspond exactly between the left and right views (vertical
    alignment must not be reversed). The same applies to transverse
    virtual extensometers (horizontal alignment must not be reversed).
    Left-click, hold, and drag the search ROI to the target position,
    then release.

    <img src="../../../../../../assets/products/video-extensometer/image20.png"
    style="width:6.03403in;height:3.18889in"
    alt="f556bf68-6fbd-4e29-be76-4428d41ec901" />

3)  Click ‘Calculate’ in the software. Confirm that the software is
    calculating correctly and displaying values. Check if the testing
    machine is receiving the deformation data. If data is received,
    proceed with the experiment on the testing machine. After the
    experiment concludes, return to the extensometer software and stop
    the calculation. 4) To increase the camera frame rate by cropping
    the frame, the frame for both cameras must be cropped in the driver
    software (For 3D software, the cropped frame area and X, Y offsets
    must be identical for both cameras). Additionally, the camera frame
    rate is also related to the exposure time: Maximum frame rate =
    1,000,000 μs / current exposure time. These two factors together
    determine the final camera frame rate.

**  
IV. Software Notes**

1.  If no image appears when opening the software, it might be due to
    inconsistent frame sizes between the two cameras (can be reset in
    the driver software) or the camera ports being occupied by another
    software application (close other software and restart this
    software). Procedure to reset camera frame: Open the <img src="../../../../../../assets/products/video-extensometer/image21.png"
    style="width:0.42361in;height:0.55972in" /> software, connect the
    cameras to open the live view, then reset the frame size for both
    cameras.
2.  The acquisition frame rate and exposure time must be consistent
    between the two cameras. Inconsistency will cause issues with the
    software’s output data.
3.  The software requires a dongle to be connected for operation.

**V. Safe Operation and Equipment Maintenance**

1.  If equipment accuracy issues arise, perform recalibration according
    to the detailed instructions in the Stereo Extensometer Operation
    Manual.
2.  Do not operate this instrument alone without professional training.
3.  Avoid directing the light source into human eyes during use to
    prevent potential eye injury to operators.
4.  In high-temperature environments, wear high-temperature gloves to
    prevent burns. Exercise caution to avoid getting materials used for
    creating speckle patterns or marker points into the eyes.
5.  When not in use, the instrument should be stored in its case in a
    dry place, protected from shock, dust, and moisture.
6.  Transport the instrument in its case. Handle with care during
    transport to avoid squeezing, impact, and severe vibration. For
    long-distance transport, use padding around the case.
7.  When installing or removing the instrument from the tripod, always
    support the instrument to prevent dropping.
8.  Do not clean plastic components or acrylic surfaces with chemical
    reagents. Use a soft cloth dampened with water.
9.  Before measurement, conduct a thorough inspection of the instrument.
    Confirm all indicators, functions, and power supply meet
    requirements before proceeding.
10. If any instrument malfunction is detected, non-professional
    personnel must not disassemble the instrument themselves to avoid
    causing unnecessary damage.
