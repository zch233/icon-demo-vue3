// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SwitcherFilledSvg from '@ant-design/icons-svg/lib/asn/SwitcherFilled';

export interface SwitcherFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SwitcherFilled: SwitcherFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={SwitcherFilledSvg} />;

SwitcherFilled.displayName = 'SwitcherFilled';

export default FunctionalComponent;