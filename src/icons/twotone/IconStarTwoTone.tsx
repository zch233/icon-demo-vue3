// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import StarTwoToneSvg from '@ant-design/icons-svg/es/asn/StarTwoTone';

export interface StarTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconStarTwoTone: StarTwoToneIconType = (props, context) => (
    <Icon name='StarTwoTone' {...{ ...props, ...context.attrs }} icon={StarTwoToneSvg} />
);

IconStarTwoTone.displayName = 'IconStarTwoTone';

export default IconStarTwoTone;