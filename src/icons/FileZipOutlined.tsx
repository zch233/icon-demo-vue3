// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FileZipOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileZipOutlined';

export interface FileZipOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FileZipOutlined: FileZipOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FileZipOutlinedSvg} />
    ;

FileZipOutlined.displayName = 'FileZipOutlined';

export default FunctionalComponent;