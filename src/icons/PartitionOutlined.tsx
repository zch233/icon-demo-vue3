// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import PartitionOutlinedSvg from '@ant-design/icons-svg/lib/asn/PartitionOutlined';

export interface PartitionOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const PartitionOutlined: PartitionOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={PartitionOutlinedSvg} />
    ;

PartitionOutlined.displayName = 'PartitionOutlined';

export default FunctionalComponent;