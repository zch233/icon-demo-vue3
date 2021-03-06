// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AndroidFilledSvg from 'icon-base/es/asn/AndroidFilled';

export interface AndroidFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAndroidFilled: AndroidFilledIconType = (props, context) => <Icon name='AndroidFilled' {...{ ...props, ...context.attrs }} icon={AndroidFilledSvg} />;

IconAndroidFilled.displayName = 'IconAndroidFilled';
IconAndroidFilled.theme = 'filled';
IconAndroidFilled.originName = 'android';

export default IconAndroidFilled;
