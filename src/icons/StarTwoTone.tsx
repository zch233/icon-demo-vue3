// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import StarTwoToneSvg from '@ant-design/icons-svg/lib/asn/StarTwoTone';

export interface StarTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const StarTwoTone: StarTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={StarTwoToneSvg} />;

StarTwoTone.displayName = 'StarTwoTone';

export default FunctionalComponent;