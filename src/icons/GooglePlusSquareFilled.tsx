// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import GooglePlusSquareFilledSvg from '@ant-design/icons-svg/lib/asn/GooglePlusSquareFilled';

export interface GooglePlusSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const GooglePlusSquareFilled: GooglePlusSquareFilledIconType = (props, context) => <Icon name='GooglePlusSquareFilled' {...{ ...props, ...context.attrs }} icon={GooglePlusSquareFilledSvg} />;

GooglePlusSquareFilled.displayName = 'GooglePlusSquareFilled';

export default GooglePlusSquareFilled;