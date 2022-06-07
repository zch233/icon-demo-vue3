// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FileAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileAddOutlined';

export interface FileAddOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FileAddOutlined: FileAddOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FileAddOutlinedSvg} />
    ;

FileAddOutlined.displayName = 'FileAddOutlined';

export default FunctionalComponent;