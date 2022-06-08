// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SmileTwoToneSvg from '@ant-design/icons-svg/lib/asn/SmileTwoTone';

export interface SmileTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SmileTwoTone: SmileTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={SmileTwoToneSvg} />;

SmileTwoTone.displayName = 'SmileTwoTone';

export default SmileTwoTone;