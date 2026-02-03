import Button from '@/components/Button';
import ScreenWrapper from '@/components/ScreenWrapper';
import Typo from '@/components/Typo';
import {colors, spacingX, spacingY} from '@/constants/theme';
import {verticalScale} from '@/utils/styling';
import {LinearGradient} from 'expo-linear-gradient';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Animated, {FadeIn, FadeInDown} from 'react-native-reanimated';
const Welcome = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Login Button & Image */}
        <View>
          <TouchableOpacity>
            <Typo fontWeight={'500'} style={styles.loginButton}>
              Sign In
            </Typo>
          </TouchableOpacity>
          <Animated.Image
            entering={FadeIn.duration(1000)}
            source={require('../../assets/images/welcome.png')}
            style={styles.welcomeImage}
            resizeMode="contain"
          />
        </View>
        {/* Footer */}
        <View style={styles.footer}>
          <LinearGradient
            // Background Linear Gradient
            colors={['transparent', '#5e5e5e4e']}
            style={styles.background}
          />
          <Animated.View
            entering={FadeInDown.duration(100).springify().damping(12)}
            style={{alignItems: 'center'}}
          >
            <Typo size={30} fontWeight={'800'}>
              Always take control
            </Typo>
            <Typo size={30} fontWeight={'800'}>
              of your finances
            </Typo>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.duration(100)
              .delay(100)
              .springify()
              .damping(12)}
            style={{alignItems: 'center'}}
          >
            <Typo size={17} color={colors.textLight}>
              Finances must be arranged to set a better
            </Typo>
            <Typo size={17} color={colors.textLight}>
              lifestyle in future
            </Typo>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.duration(100)
              .delay(100)
              .springify()
              .damping(12)}
            style={styles.buttonContainer}
          >
            {/* button */}
            <Button>
              <Typo size={22} color={colors.neutral900} fontWeight={'800'}>
                Get Started
              </Typo>
            </Button>
          </Animated.View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: spacingY._7,
  },
  welcomeImage: {
    width: '100%',
    height: verticalScale(300),
    alignSelf: 'center',
    marginTop: verticalScale(100),
  },
  loginButton: {
    alignSelf: 'flex-end',
    marginRight: spacingX._20,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: -40,
    height: 40,
  },
  footer: {
    backgroundColor: colors.neutral900,
    alignItems: 'center',
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(45),
    gap: spacingY._20,
    shadowColor: 'white',
    shadowOffset: {width: 0, height: -10},
    elevation: 10,
    shadowRadius: 25,
    shadowOpacity: 0.15,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: spacingX._25,
  },
});
