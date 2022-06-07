// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FileSyncOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileSyncOutlined';

export interface FileSyncOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FileSyncOutlined: FileSyncOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FileSyncOutlinedSvg} />
    ;

FileSyncOutlined.displayName = 'FileSyncOutlined';

export default FunctionalComponent;