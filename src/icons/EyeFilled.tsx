// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import EyeFilledSvg from '@ant-design/icons-svg/lib/asn/EyeFilled';

export interface EyeFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const EyeFilled: EyeFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={EyeFilledSvg} />;

EyeFilled.displayName = 'EyeFilled';

export default EyeFilled;