// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import DownCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DownCircleFilled';

export interface DownCircleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const DownCircleFilled: DownCircleFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={DownCircleFilledSvg} />
    ;

DownCircleFilled.displayName = 'DownCircleFilled';

export default DownCircleFilled;