// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import LikeTwoToneSvg from '@ant-design/icons-svg/lib/asn/LikeTwoTone';

export interface LikeTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const LikeTwoTone: LikeTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={LikeTwoToneSvg} />;

LikeTwoTone.displayName = 'LikeTwoTone';

export default FunctionalComponent;