import React from "react";
import { View } from 'react-native'
import AutoHeightImage from "react-native-auto-height-image";

export const CurrencyFlag = (props) => {
    const { currency, width } = props;
    const img = data[currency];
    if (!img) return <View style={{ width: width }} />;
    return <AutoHeightImage source={{ uri: img }} width={width} />
}

const data = {
    CDF: 'data:image/png;base64,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',
    USD: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAgBAMAAACm+uYvAAAAD1BMVEUAJWq0vtO1v9PBASv////7AfyZAAAAOUlEQVQoz2NgQALGSIABt4QSHDK4IAEGBkU4RJMg3Q4kS9CMQlhCqR3DxB8uOABuCWMcALfEiLUDADkOhlU5rxL6AAAAAElFTkSuQmCC',
   
}
