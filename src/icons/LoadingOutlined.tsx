// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import LoadingOutlinedSvg from '@ant-design/icons-svg/lib/asn/LoadingOutlined';

export interface LoadingOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const LoadingOutlined: LoadingOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={LoadingOutlinedSvg} />
    ;

LoadingOutlined.displayName = 'LoadingOutlined';

export default FunctionalComponent;