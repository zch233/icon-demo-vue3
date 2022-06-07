// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FileDoneOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileDoneOutlined';

export interface FileDoneOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FileDoneOutlined: FileDoneOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FileDoneOutlinedSvg} />
    ;

FileDoneOutlined.displayName = 'FileDoneOutlined';

export default FunctionalComponent;