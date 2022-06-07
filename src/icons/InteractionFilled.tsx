// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import InteractionFilledSvg from '@ant-design/icons-svg/lib/asn/InteractionFilled';

export interface InteractionFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const InteractionFilled: InteractionFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={InteractionFilledSvg} />
    ;

InteractionFilled.displayName = 'InteractionFilled';

export default InteractionFilled;