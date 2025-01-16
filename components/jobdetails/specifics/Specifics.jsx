import { View, Text } from "react-native";

import styles from "./specifics.style";

const Specifics = ({ title, points }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>

      <View style={styles.pointsContainer}>
        {points.map((item, index) => (
          <View style={styles.pointWrapper} key={item + index}>
<<<<<<< HEAD
            <View style={styles.pointDot} />
            <Text style={styles.pointText}>{item}</Text>
=======
            <View style={styles.pointDot}/>
            <Text style={styles.point}>{item}</Text>
>>>>>>> bb8ef6de62d89793b0db62d67ae286246bc62095
          </View>
        ))}
      </View>
    </View>
  );
};

export default Specifics;
