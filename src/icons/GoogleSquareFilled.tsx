// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import GoogleSquareFilledSvg from '@ant-design/icons-svg/lib/asn/GoogleSquareFilled';

export interface GoogleSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const GoogleSquareFilled: GoogleSquareFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={GoogleSquareFilledSvg} />;

GoogleSquareFilled.displayName = 'GoogleSquareFilled';

export default FunctionalComponent;