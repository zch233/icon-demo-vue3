// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SkinFilledSvg from '@ant-design/icons-svg/lib/asn/SkinFilled';

export interface SkinFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SkinFilled: SkinFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={SkinFilledSvg} />;

SkinFilled.displayName = 'SkinFilled';

export default FunctionalComponent;