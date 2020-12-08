export default class CommonHelper {
  goBack = (props, source) => {
    props.navigation.goBack(source);
  };

  navigateTo = (props, navigation, parameter) => {
    props.navigation.navigate(navigation, parameter);
  };
}
