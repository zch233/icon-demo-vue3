// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import AliwangwangFilledSvg from '@ant-design/icons-svg/lib/asn/AliwangwangFilled';

export interface AliwangwangFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const AliwangwangFilled: AliwangwangFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={AliwangwangFilledSvg} />
    ;

AliwangwangFilled.displayName = 'AliwangwangFilled';

export default AliwangwangFilled;