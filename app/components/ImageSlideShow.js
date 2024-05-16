import React, {useState, useEffect, useRef} from 'react';
import {View, ScrollView, Dimensions, StyleSheet, Image} from 'react-native';
import colors from '../config/colors';

const {width: screenWidth} = Dimensions.get('window');

function ImageSlideShow(props) {
  const images = [
    require('../assets/images/img1.jpg'),
    require('../assets/images/img2.jpg'),
    require('../assets/images/img3.jpg'),
    require('../assets/images/img4.jpg'),
    require('../assets/images/img5.jpg'),
    require('../assets/images/img6.jpg'),
    require('../assets/images/img7.jpg'),
    require('../assets/images/img8.jpg'),
    require('../assets/images/img9.jpg'),
    require('../assets/images/img10.jpg'),
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollViewRef.current.scrollTo({
        x: (currentIndex + 1) * screenWidth,
        animated: true,
      });
      setCurrentIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, images]);

  const handleSlide = () => {
    // You can add custom logic here if you want to handle slide events
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleSlide}
        onMomentumScrollEnd={ev => {
          const currentIndex = Math.floor(
            ev.nativeEvent.contentOffset.x / screenWidth,
          );
          setCurrentIndex(currentIndex);
        }}
        scrollEventThrottle={16}>
        {images.map((image, index) => (
          <Image key={index} source={image} style={styles.image} />
        ))}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              {
                backgroundColor:
                  index === currentIndex ? colors.primary : '#CCCCCC',
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '40%',
  },
  image: {
    width: screenWidth,
    height: '100%',
    resizeMode: 'cover',
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});

export default ImageSlideShow;
