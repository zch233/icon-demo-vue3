// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FlagTwoToneSvg from '@ant-design/icons-svg/lib/asn/FlagTwoTone';

export interface FlagTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FlagTwoTone: FlagTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={FlagTwoToneSvg} />;

FlagTwoTone.displayName = 'FlagTwoTone';

export default FlagTwoTone;