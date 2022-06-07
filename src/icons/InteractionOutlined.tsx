// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import InteractionOutlinedSvg from '@ant-design/icons-svg/lib/asn/InteractionOutlined';

export interface InteractionOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const InteractionOutlined: InteractionOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={InteractionOutlinedSvg} />
    ;

InteractionOutlined.displayName = 'InteractionOutlined';

export default InteractionOutlined;