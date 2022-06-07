// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FileWordOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileWordOutlined';

export interface FileWordOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FileWordOutlined: FileWordOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FileWordOutlinedSvg} />
    ;

FileWordOutlined.displayName = 'FileWordOutlined';

export default FunctionalComponent;