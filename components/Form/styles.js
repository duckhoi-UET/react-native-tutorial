import { StyleSheet } from "react-native";
import { colors } from "../../constants/styles";

export default styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    height: 44,
    width: "80%",
    backgroundColor: colors.white,
    borderColor: colors.primary,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  button: {
    backgroundColor: colors.primary,
    width: 44,
    height: 44,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: 26,
    fontWeight: 600,
  },
});
