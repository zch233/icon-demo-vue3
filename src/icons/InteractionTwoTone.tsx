// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import InteractionTwoToneSvg from '@ant-design/icons-svg/lib/asn/InteractionTwoTone';

export interface InteractionTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const InteractionTwoTone: InteractionTwoToneIconType = (props, context) => <Icon name='InteractionTwoTone' {...{ ...props, ...context.attrs }} icon={InteractionTwoToneSvg} />;

InteractionTwoTone.displayName = 'InteractionTwoTone';

export default InteractionTwoTone;