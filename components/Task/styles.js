import { StyleSheet } from "react-native";
import { colors } from "../../constants/styles";

export default styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginBottom: 15,
  },
  square: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    color: colors.white,
    fontWeight: 500,
    fontSize: 20,
  },
  textContent: {
    fontWeight: 500,
    fontSize: 22,
  },
  even: {
    backgroundColor: colors.primary,
  },
  odd: {
    backgroundColor: colors.green,
  },
});
