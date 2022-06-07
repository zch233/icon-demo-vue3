// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import DownCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/DownCircleOutlined';

export interface DownCircleOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const DownCircleOutlined: DownCircleOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={DownCircleOutlinedSvg} />
    ;

DownCircleOutlined.displayName = 'DownCircleOutlined';

export default FunctionalComponent;