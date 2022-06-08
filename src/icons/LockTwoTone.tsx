// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import LockTwoToneSvg from '@ant-design/icons-svg/lib/asn/LockTwoTone';

export interface LockTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const LockTwoTone: LockTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={LockTwoToneSvg} />;

LockTwoTone.displayName = 'LockTwoTone';

export default FunctionalComponent;