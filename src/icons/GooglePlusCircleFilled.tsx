// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import GooglePlusCircleFilledSvg from '@ant-design/icons-svg/lib/asn/GooglePlusCircleFilled';

export interface GooglePlusCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const GooglePlusCircleFilled: GooglePlusCircleFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={GooglePlusCircleFilledSvg} />;

GooglePlusCircleFilled.displayName = 'GooglePlusCircleFilled';

export default GooglePlusCircleFilled;