// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import EyeFilledSvg from '@ant-design/icons-svg/es/asn/EyeFilled';

export interface EyeFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconEyeFilled: EyeFilledIconType = (props, context) => (
    <Icon name='EyeFilled' {...{ ...props, ...context.attrs }} icon={EyeFilledSvg} />
);

IconEyeFilled.displayName = 'IconEyeFilled';

export default IconEyeFilled;