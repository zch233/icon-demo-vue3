// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SwitcherTwoToneSvg from '@ant-design/icons-svg/lib/asn/SwitcherTwoTone';

export interface SwitcherTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SwitcherTwoTone: SwitcherTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={SwitcherTwoToneSvg} />;

SwitcherTwoTone.displayName = 'SwitcherTwoTone';

export default FunctionalComponent;