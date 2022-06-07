// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FileSearchOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileSearchOutlined';

export interface FileSearchOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FileSearchOutlined: FileSearchOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FileSearchOutlinedSvg} />
    ;

FileSearchOutlined.displayName = 'FileSearchOutlined';

export default FunctionalComponent;